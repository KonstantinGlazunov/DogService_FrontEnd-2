/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import Button from 'react-bootstrap/Button';

function Buttons() {
	return (
		<>
			<Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{' '}
			<Button variant="success">Success</Button> <Button variant="warning">Warning</Button>{' '}
			<Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
			<Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
		</>
	);
}

export default Buttons;
