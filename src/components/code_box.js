import { Textarea } from '@mantine/core';

const CodeBox = ({
    code = '',
    onUpdate = () => {},
}) => {

    return (
    <>
        <Textarea
            label="Enter Your Code Here:"
            minRows={8}
            maxRows={15}
            value={code}
            onChange={(e) => onUpdate(e.target.value)} />
    </>
    );
}

export default CodeBox;