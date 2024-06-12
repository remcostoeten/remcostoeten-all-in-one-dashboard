package main

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

func main() {
	err := filepath.Walk(".", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Skip node_modules and .next directories
		if info.IsDir() && (info.Name() == "node_modules" || info.Name() == ".next") {
			return filepath.SkipDir
		}

		// Process only TypeScript (.ts, .tsx) files
		if strings.HasSuffix(path, ".ts") || strings.HasSuffix(path, ".tsx") {
			checkFileForUnusedImports(path)
		}

		return nil
	})

	if err != nil {
		fmt.Printf("Error walking the directory: %v\n", err)
	}
}

func checkFileForUnusedImports(filePath string) {
	file, err := os.Open(filePath)
	if err != nil {
		fmt.Printf("Error opening file %s: %v\n", filePath, err)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	unusedImportRegex := regexp.MustCompile(`(?m)^(import.*from '.*';)$`)
	errorRegex := regexp.MustCompile(`(Error\(TS6133\)|Error\(TS2300\))`)

	foundUnused := false

	for scanner.Scan() {
		line := scanner.Text()
		if unusedImportRegex.MatchString(line) {
			if errorRegex.MatchString(line) {
				foundUnused = true
				break
			}
		}
	}

	if foundUnused {
		fmt.Println("Unused import found in:", filePath)
	}
}
