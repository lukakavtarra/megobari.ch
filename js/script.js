const showUsMore = (item) => {
    const textMore = item.parentNode.querySelectorAll('.faqTextMore');
    const arrow = item.parentNode.querySelectorAll('i')
    if(textMore[0].innerHTML == ''){
        textMore[0].innerHTML = "<p>The MagicMassage™ can last up to 6 hours when it's fully charged.</p>"
    arrow[0].classList = 'fa-solid fa-angle-up'

    }else {
        textMore[0].innerHTML = ''
    arrow[0].classList = 'fa-solid fa-angle-down'

    }
}

// SCROLLABLE BUTTONS FOR CARD FLEXBOX