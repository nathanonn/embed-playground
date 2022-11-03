import { Select, Group, NumberInput } from "@mantine/core";

const Settings = ({
    settings,
    onUpdate = () => {}
}) => {
    return (
    <Group
        pt="sm"
        pb="sm"
        spacing={"10px"}
        >
        <NumberInput
            label="Width"
            value={settings.width}
            onChange={(value) => onUpdate({ ...settings, width: value })} />
        <NumberInput
            label="Height"
            value={settings.height}
            onChange={(value) => onUpdate({ ...settings, height: value })} />
        <Select
            label="Preset"
            placeholder="Select a Preset"
            data={[
                { label: 'JavaScript', value: 'javascript' },
                { label: 'React', value: 'react' },
                { label: 'React Native', value: 'react-native' },
                { label: 'HTML', value: 'html' },
                { label: 'Python', value: 'python' },
            ]}
            value={settings.preset}
            onChange={(value) => onUpdate({ ...settings, preset: value })} />
    </Group>
    );
}

export default Settings;