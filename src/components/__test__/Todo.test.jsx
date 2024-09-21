import { render, screen } from '@testing-library/react';
import Todo from '../../components/Todo'

it('should have hello World', () => {
    render(<Todo />);
    const message = screen.queryByText(/Hello world/i);

    expect(message).toBeVisible();
})