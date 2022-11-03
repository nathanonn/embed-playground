import { Textarea, Group, Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { CopyIcon } from '@radix-ui/react-icons';

const EmbedCode = ({
    code = ''
}) => {
    const clipboard = useClipboard({ timeout: 500 });

    return (
    <>
        <Textarea
            label="Your Embed Playground Code Here:"
            minRows={8}
            maxRows={15}
            value={code}
            onChange={() => {}} />
        <Group
            mt="10px"
            position={"right"}>
            <Button
                variant='filled'
                color='blue'
                disabled={clipboard.copied}
                leftIcon={<CopyIcon />}
                onClick={() => {
                    clipboard.copy(code);
                }}
                >
                { clipboard.copied ? 'Copied!' : 'Copy' }
            </Button>
        </Group>
    </>
    );
}

export default EmbedCode;