In this project, we will be using React Testing Library and Jest to carry out our testing.

React Testing Library is a testing Library, similar to Enzyme, which is used to test React components. It should be used in conjunction with a testing framework such as Jest.

Jest is a testing framework and test runner which allows us to run tests from the command line and offersfunctions for test suites, test cases, and assertions.

This file will provide a practical guide on how to get started using React Testing Library and Jest, however, if you are new to React Testing Library, I would highly recommend reading the below article. It starts with the basics of testing in React and provides an excellent tutorial of how to use both Jest and React Testing Library in your React project:

https://www.robinwieruch.de/react-testing-library

React Testing Library encourages you to test your React components not too much in isolation, but in integration (integration test) with other components. Only this way, can you actually test whether state changes were applied in the DOM and whether side-effects took effect.

1. Setup
    Jest and RTL should be installed after you run 'npm install', you can check in the package.json if this is the case. If not you can use:
    - RTL: npm install --save-dev @testing-library/dom
    - Jest: npm install --save-dev jest

    In each test file, you will need to import React, any components you are testing in that file, as well as any libraries or hooks you are using. The most common are:

    import React from "react";
    import { render, screen, fireEvent } from "@testing-library/react";
    import userEvent from '@testing-library/user-event';

2. Testing structure
    Testing shouldn't concern itself with the internal implementation details of a component, like state, but rather the way the software is used and interacted with by a user.

    Test Block:
    - Render a component we want to test
    - Find elements we want to interct with (see section 3)
    - Interact with those elements (see section 4 & 5)
    - Assert that the results are as expected

    Example:
    describe('Register', () => {
        test('Check that the title for step 1 is rendered on page load', () => {
            render(<Register />)

            const nextButton = screen.getByRole('button', {name: /Next/i})
            expect(nextButton).toBeEnabled();
        })
    })

    We can then run the test in the console using:
    npm test

3. Accssing elements in the DOM

    If we include 'screen.debug()' in our test after Render, it will show us the html that is rendered for that component in the console.

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

    If carrying a component where an API is used or a state change takes place, we will need to use an asynchronous function, by including async in the test line, as below:

    test('renders App component', async () => {...}

    We may also need to use findBy instead of getBy (see above) and/or include await before any lines of code that need to wait for something to happen before we can check it is there (such as a state change or API call).

    For example, I triggered a state change in one of my tests, and had to wait for it to occur before testing if an element was in the DOM, so I used:

    expect(await screen.findByText(/create password/i)).toBeInTheDocument();