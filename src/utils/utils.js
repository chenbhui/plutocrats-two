
const components = ['VText', 'RectShape', 'CircleShape']
export function isPreventDrop(component) {
    return !components.includes(component) && !component.startsWith('SVG')
}
