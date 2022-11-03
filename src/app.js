import { useState, useEffect } from 'react';
import { Title, Text, Space, Container, Center } from '@mantine/core';
import { ArrowDownIcon } from '@radix-ui/react-icons';

import CodeBox from './components/code_box';
import EmbedCode from './components/embed_code';
import Settings from './components/settings';

const sampleCode = `let x = 1;
let y = 2;

console.log( x+y ); 
`;

const App = () => {
	const [ code, setCode ] = useState(sampleCode);
	const [ embedCode, setEmbedCode ] = useState('');
	const [ settings, setSettings ] = useState({
		width: 800,
		height: 225,
		preset: 'javascript'
	});

	useEffect(() => {
		if ( code && code !== '' ) {
			let eCode = encodeURIComponent(JSON.stringify({
				code,
				preset: settings.preset
			}));

			// replace = with its html entity
			eCode = eCode.replace(/=/g, '%3D');

			setEmbedCode(
				`<iframe src="//unpkg.com/javascript-playgrounds@%5E1.0.0/public/index.html#data=${eCode}" style="width: ${settings.width}px; height: ${settings.height}px; border: 0; border-radius: 4px; overflow: hidden;" title="Embed Playground"></iframe>`
			);
		}
	},[ code, settings ]);

  	return (
	<Container
		size={650}
		>
		<Title 
		 	order={2}
			mt="sm"
			mb="md" 
			align='center'>Embed Playground Generator</Title>
		<Space h='md' />
		<CodeBox
			code={code}
			onUpdate={(newCode) => setCode(newCode)} />
		{/* <Space h="sm" /> */}
		<Settings
			settings={settings}
			onUpdate={(newSettings) => setSettings(newSettings)} />
		<Space h='md' />
		<Center>
			<ArrowDownIcon width={30} height={30} />
		</Center>
		<Space h='md' />
		<EmbedCode
			code={embedCode}
			/>
	</Container>
  	);
}

export default App;
