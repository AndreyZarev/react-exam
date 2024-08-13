import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'

import TrainerDetails from "./TrainerDetails"
import { MemoryRouter } from 'react-router-dom';
test("test true", () => {
    expect(true).toEqual(true);
})
test("test dom", () => {
    render(<TrainerDetails />)
    const header = screen.getByText('One of our Gym Trainers')

    expect(header).toBeVisible();

})

test("is dom there", () => {
    // vi.mock('react-router-dom', () => ({
    //     ...vi.importActual('react-router-dom'), // Import everything else from react-router-dom
    //     useNavigate: () => vi.fn(), // Mock useNavigate as a jest mock function
    // }));
    render(<TrainerDetails />)

    // <MemoryRouter>

    // </MemoryRouter>
    const header = screen.getByText('One of our Gym Trainers')

    expect(header).toBeVisible();
})