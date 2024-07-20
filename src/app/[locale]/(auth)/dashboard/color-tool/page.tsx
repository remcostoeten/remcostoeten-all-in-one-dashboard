"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { getColorHistory, addColorToHistory } from "@/core/utils/color-history";
import { rgbToHex, rgbToHsl, hexToRgb, hslToRgb, calculateContrast } from "@/core/utils/colorUtils";
import { getFavoriteColors, addColorToFavorites, removeColorFromFavorites } from "@/core/utils/favourite-colors";
import ClosestTailwindColor from "./components/ClosestTailwindColor";
import ColorDisplay from "./components/ColorDisplay";
import RgbaConverter from "./components/RgbaConverter";
import { Flex } from "@/components/shared/atoms/Flex";
import ColorInput from "./components/ColorInput";
import { ColorSliders } from "./components/ColorSlider";


export default function ColorConverter() {
    const [rgbColor, setRgbColor] = useState({ r: 0, g: 0, b: 0 });
    const [hexColor, setHexColor] = useState("#000000");
    const [hslColor, setHslColor] = useState({ h: 0, s: 0, l: 0 });
    const [rgbaColor, setRgbaColor] = useState({ ...rgbColor, a: 1 });
    const [colorHistory, setColorHistory] = useState<string[]>(() =>
        typeof window !== 'undefined' ? getColorHistory() : []
    );
    const [favoriteColors, setFavoriteColors] = useState<string[]>(() =>
        typeof window !== 'undefined' ? getFavoriteColors() : []
    );

    const [contrastColor, setContrastColor] = useState("#ffffff");
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleRgbChange = (newRgbColor: { r: number; g: number; b: number }) => {
        setRgbColor(newRgbColor);
        const newHexColor = rgbToHex(newRgbColor.r, newRgbColor.g, newRgbColor.b);
        setHexColor(newHexColor);
        setHslColor(rgbToHsl(newRgbColor.r, newRgbColor.g, newRgbColor.b));
    };

    const handleHexChange = (newHexColor: string) => {
        setHexColor(newHexColor);
        const newRgbColor = hexToRgb(newHexColor);
        setRgbColor(newRgbColor);
        setHslColor(rgbToHsl(newRgbColor.r, newRgbColor.g, newRgbColor.b));
    };

    const handleHslChange = (newHslColor: { h: number; s: number; l: number }) => {
        setHslColor(newHslColor);
        const newRgbColor = hslToRgb(newHslColor.h, newHslColor.s, newHslColor.l);
        setRgbColor(newRgbColor);
        setHexColor(rgbToHex(newRgbColor.r, newRgbColor.g, newRgbColor.b));
    };

    const handleRgbaChange = (newRgbaColor: { r: number; g: number; b: number; a: number }) => {
        setRgbaColor(newRgbaColor);
        const newHexColor = rgbToHex(newRgbaColor.r, newRgbaColor.g, newRgbaColor.b);
        setHexColor(newHexColor);
        setHslColor(rgbToHsl(newRgbaColor.r, newRgbaColor.g, newRgbaColor.b));
    };

    const handleCustomColorAdd = () => {
        if (typeof window !== 'undefined') {
            addColorToHistory(hexColor);
            setColorHistory(getColorHistory());
        }
    };

    const handleFavoriteAdd = () => {
        if (typeof window !== 'undefined') {
            addColorToFavorites(hexColor);
            setFavoriteColors(getFavoriteColors());
        }
    };


    const handleFavoriteRemove = (color: string) => {
        removeColorFromFavorites(color);
        setFavoriteColors(getFavoriteColors());
    };

    const handleColorCopy = (color: string) => {
        if (typeof window !== 'undefined' && window.navigator) {
            window.navigator.clipboard.writeText(color);
            setToastMessage("Color copied to clipboard!");
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 3000);
        }
    };

    const contrastRatio = calculateContrast(hexColor, contrastColor);


    return (
        <div className="min-h-screen ">
            <div className="max-w-4xl mx-auto rounded-xl shadow-md overflow-hidden">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Flex>
                        <RgbaConverter
                            size='medium'
                            value={rgbColor}
                            onChange={handleRgbChange}
                        />

                        <ColorSliders color={rgbColor} onChange={handleRgbChange} />
                    </Flex>
                </div>

                <div className="space-y-4">
                    <ColorInput size='large' label="HEX" value={parseInt(hexColor.slice(1), 16)} onChange={(value) => handleHexChange(`#${value.toString(16).padStart(6, "0")}`)} />
                    <ColorInput label="H" value={hslColor.h} onChange={(value) => handleHslChange({ ...hslColor, h: value })} />
                    <ColorInput label="S" value={hslColor.s} onChange={(value) => handleHslChange({ ...hslColor, s: value })} />
                    <ColorInput label="L" value={hslColor.l} onChange={(value) => handleHslChange({ ...hslColor, l: value })} />
                    <ColorInput label="A" value={rgbaColor.a} onChange={(value) => handleRgbaChange({ ...rgbaColor, a: value })} />
                </div>
            </div>

            <div className="mt-8 flex space-x-4">
                <Button onClick={handleCustomColorAdd} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add Custom Color
                </Button>
                <Button onClick={handleFavoriteAdd} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Add to Favorites
                </Button>
            </div>

            {toastVisible && <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md">{toastMessage}</div>}

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Color History</h2>
                <div className="grid grid-cols-6 gap-2">
                    {colorHistory.map((color, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 rounded-md cursor-pointer transition-transform hover:scale-110"
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorCopy(color)}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Favorite Colors</h2>
                <div className="grid grid-cols-6 gap-2">
                    {favoriteColors.map((color, index) => (
                        <div
                            key={index}
                            className="relative w-12 h-12 rounded-md cursor-pointer transition-transform hover:scale-110"
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorCopy(color)}
                        >
                            <button
                                onClick={() => handleFavoriteRemove(color)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contrast Checker</h2>
                <input
                    type="text"
                    value={contrastColor}
                    onChange={(e) => setContrastColor(e.target.value)}
                    placeholder="Enter second color"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
                />
                <p className="text-lg">Contrast Ratio: <span className="font-semibold">{contrastRatio}</span></p>
            </div>

            <ColorDisplay hexColor={hexColor} onColorCopy={handleColorCopy} />
            <ClosestTailwindColor hexColor={hexColor} />
        </div>
    );
}
