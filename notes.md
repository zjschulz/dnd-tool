## Notes

# Issues
    1. Search/Filter
        A. HTML loads before NgOnInit, thus the initial value input into the filter is [], therefore until you put something into the input field, there will be no items displayed.
            Solutions?:
            I. Add a button to display the spells
            II. Can you add a delay to html elements loading?
            SOLVED! in NgOnInit I updated filteredName to ''
        B. Search needs to not be an exact match. Looking for any name that includes the search input.
            SOLVED! Updated logic
        C. Routing to Detail Comp is done through id.
            SOLVED! Used index property instead of id

# Goals
    1. Create Search/Filter Functionality For Components [X]
    2. Add Scroll Bar to Lists [X]
    3. Update Create Character With More Detailed Options
    4. DEPLOY, updated angular