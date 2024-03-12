import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { InvestmentsContainer } from '../../client/componentImports';

test('Checking heading', () => {
    render(<InvestmentsContainer/>);
    const investTitle = screen.getByText(/Investments/i);
})