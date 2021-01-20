## Notes

# Issues
    1. Search/Filter
        A. HTML loads before NgOnInit, thus the initial value input into the filter is [], therefore until you put something into the input field, there will be no items displayed.
            Solutions?:
            I. Add a button to display the spells
            II. Can you add a delay to html elements loading?
        B. Search needs to not be an exact match. Looking for any name that includes the search input.
        C. Routing to Detail Comp is done through id. 

# Goals
    1. Create Search/Filter Functionality For Components
    2. Add Scroll Bar to Lists
    3. Update Create Character With More Detailed Options