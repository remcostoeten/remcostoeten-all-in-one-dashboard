// Assuming svgString is a sanitized SVG string
export default function svgToReactComponent(svgString: string): React.ReactElement {
    // Directly return a component that sets innerHTML for the SVG element
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
  }