In this project, we will be using React Testing Library and Jest to carry out our testing.

React Testing Library is...similar to Enzyme...

Jest is..

This file will provide a practical guide on how to get started using React Testing Library and Jest, however, if you are new to React Testing Library, I would highly recommend reading the below article. It starts with the basics of testing in React and provides an excellent tutorial of how to use both Jest and React Testing Library in your React project:

https://www.robinwieruch.de/react-testing-library

React Testing Library encourages you to test your React components not too much in isolation, but in integration (integration test) with other components. Only this way, can you actually test whether state changes were applied in the DOM and whether side-effects took effect.

1. Setup
    Jest, React testing library
    import { render, screen } from '@testing-library/react';

2. Testing structure
    Testing shouldn't concern itself with the internal implementation details of a component, like state, but rather the way the software is used and interacted with by a user.

    screen.debug()

    Test Block:
    - Render a component we want to test
    - Find elements we want to interct with
    - Interact with those elements
    - Assert that the results are as expected

3. Accssing elements in the DOM. 

    Most common and favourable methods:
        getByText - Use text (specific) or RegEx to find elelments
        getByRole - Use Aria-label or elements with roles such as button, heading, textbox, link. If you include 'screen.getByRole('');' in your test suite, it will show you all the slectable roles in the rendered HTML. Example:
            getByRole('button', {name: /submit/i})

    Less common:
        LabelText: getByLabelText: <label for="search" /> - good for forms
        PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
        AltText: getByAltText: <img alt="profile" />
        DisplayValue: getByDisplayValue: <input value="JavaScript" />
        TestId: getByTestId where one needs to assign data-testid attributes in the source code's HTML (this is a last resort!).

    We should use queryBy (e.g. queryByText) instead of getBy when testing for something that isn't in the document e.g. screen.queryByText(/Searches for JavaScript/)).toBeNull(). This is because getBy throws an error as soon as it can't find something and therefore the test has already failed before it can be carried out.

    We should use findBy (e.g. findByText) for asynchronous elements which will be there eventually, such as for a promise, or after a state change.

    If any of these search terms have multiple elements that they could find, we can extend our search variants by All e.g.:
    - getAllBy
    - queryAllBy
    - findAllBy
    These return an array of elements.

4. Assertive functions
    This is what is on the right hand side of the assertion (test) e.g.  expect(getByText(/Password/)).toBeInTheDocument(); where toBeInTheDocument() is the assertive function.

    Here is a full list of functions we can use to test our code:
        - toBeDisabled
        - toBeEnabled
        - toBeEmpty
        - toBeEmptyDOMElement
        - toBeInTheDocument
        - toBeInvalid
        - toBeRequired
        - toBeValid
        - toBeVisible
        - toContainElement
        - toContainHTML
        - toHaveAttribute
        - toHaveClass
        - toHaveFocus
        - toHaveFormValues
        - toHaveStyle
        - toHaveTextContent
        - toHaveValue
        - toHaveDisplayValue
        - toBeChecked
        - toBePartiallyChecked
        - toHaveDescription

5. Testing user interactions 

    We can use fireEvent to simulate the actions of an end user such as clicking on and typing in input fields, clicking on components etc. For example:
        fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'This will be added to the text input' },
        });

    We can also use UserEvent and should do so over fireEvent where possible as it mimics the actual browser behavior more closely than fireEvent, such as also recognising keyUp, keyDown events on typing. However, userEvent doesn't yet include all the features of fireEvent. For example:
        await userEvent.type(screen.getByRole('textbox'), 'This will be added to the text input');

    See here for a full list of UserEvents: https://testing-library.com/docs/ecosystem-user-event/

6. Mock Functions - Callback Handlers

- Declare a mock function:
    const onChange = jest.fn();
- Trigger a user event (see section 5):
    await userEvent.type(screen.getByRole('textbox'), 'Sample input');
- Assert that the callback function has been called:
    expect(onChange).toHaveBeenCalledTimes(12);

This shows there has been 12 changes on typing each key. If we used fireEvent, it would have only been called 1 time as it only recognises 1 change for the overall event.

7. Testing APIs