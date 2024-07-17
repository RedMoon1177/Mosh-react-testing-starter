import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet';

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name='Mosh'/>);

        // screen.debug();

        // check heading for the hello message exists
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();

        // check for the valid content in the message
        expect(heading).toHaveTextContent(/hello mosh/i);
    });

    it('should render login button when name is not provided', () => {
        render(<Greet />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });
})