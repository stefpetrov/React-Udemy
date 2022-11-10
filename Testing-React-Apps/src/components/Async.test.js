import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe('Async component', () => {

    test('renders post if request succeeds', async () => {
        // here we overwrite fetch function and use "mock" instead of generating a real request
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }]
        })

        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem')
        // findAllByRole return a Promise

        expect(listItemElements).not.toHaveLength(0)
    })
})