export async function measureQueryTime<T>(
    queryName: string,
    queryFn: () => Promise<T>
): Promise<T> {
    const start = performance.now()

    try {
        const result = await queryFn()
        const end = performance.now()

        console.log(`${queryName} execution time: ${end - start} ms`)
        return result
    } catch (error) {
        console.error(`Error in ${queryName}:`, error)
        throw error
    }
}
