
import { getPage } from 'next-page-tester';
import { render, screen } from '@testing-library/react'


describe('Home Page', () => {
  it('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText('src=logo.png')).toBeInTheDocument();
  });
});
