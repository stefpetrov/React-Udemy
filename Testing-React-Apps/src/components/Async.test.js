import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe('Async component', () => {

    test('renders post if request succeeds', async () => {
        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem')
        // findAllByRole return a Promise

        expect(listItemElements).not.toHaveLength(0)
    })
})