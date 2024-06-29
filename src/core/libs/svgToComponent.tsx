export default function svgToReactComponent(
    svgString: string
): React.ReactElement {
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />
}
