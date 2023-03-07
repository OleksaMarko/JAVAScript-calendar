// console.log('keep going warrior')

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']


const headImage = document.querySelector('.top-head-image');
// console.log(headImage.src)
// const container = document.getElementById('main')
const calendarBody = document.querySelector('.calendar-body')
const table = document.createElement('table')
const tbody = document.createElement('tbody')
table.border = 1
table.appendChild(tbody)
calendarBody.appendChild(table)
// main.appendChild(calendarBody)

let currentDay = 1 
const tempDate = new Date()
let monthNumber = tempDate.getMonth();



// let currentMonth = tempDate.getMonth()
// console.log(`currentMonth = ${currentMonth}`)


renderContent(tempDate)                   // tyt vuklukamo TEMPDATE
// console.log(renderContent(tempDate))
// console.log(tempDate);


// renderFoot()

function renderContent(day) {
  tbody.innerHTML = ''
  tbody.className = 'calendar-elements'
  
  renderHead()
  renderWeekNames()
  renderCal(day)
  setSeasonPeacture()
}

function renderHead() {
    const tr = document.createElement('tr')
    tr.className = 'info-bar'
    const tdLeft = document.createElement('th')
    const thMonth = document.createElement('th')
    const tdRight = document.createElement('th')

    // const thYear = document.createElement('th')
    let month = 0;

    if (monthNumber === 12) {
        month = monthNames[0]
    } else if (monthNumber === -1 ) {
        month = monthNames[11]
    } else {
        month = monthNames[monthNumber]
    }

    const year = tempDate.getFullYear()

  thMonth.innerHTML = `${month} ${year}`
  thMonth.colSpan = 5
  thMonth.align = 'center'

  // thYear.innerHTML = year
  // thYear.colSpan = 3
  // thYear.align = 'right';
  tr.appendChild(tdLeft)
  tr.appendChild(thMonth)
  tr.appendChild(tdRight)
  // tr.appendChild(thYear)
  tbody.appendChild(tr)


  const buttonPrev = document.createElement('button')
  const buttonNext = document.createElement('button')

  buttonPrev.innerHTML = 'Prev'
  buttonNext.innerHTML = 'Next'

  tdLeft.appendChild(buttonPrev)
  tdRight.appendChild(buttonNext)
  

  // tdLeft.colSpan = 3
  // tdRight.colSpan = 4
  // tdRight.align = 'right'


  // tfoot.appendChild(tr)
  // table.appendChild(tfoot)
  buttonPrev.addEventListener('click', () => {
    monthNumber === -1 ? monthNumber = 11 : monthNumber;
    monthNumber--;
    tempDate.setMonth(monthNumber)
    renderContent(currentDay)
    console.log(monthNumber)
    console.log(tempDate)

  })


  buttonNext.addEventListener('click', () => {
    if (monthNumber === 12) {monthNumber = 0};
    monthNumber++;
    tempDate.setMonth(monthNumber)
    renderContent(currentDay)
    console.log(`monthNumber -- ${monthNumber}`)
    console.log(tempDate)
  })
}



function setSeasonPeacture() {
  if (monthNumber > 10 || monthNumber < 2) {
    headImage.src = "./Images/04.webp"
    // console.log('ffsasfa')
  } else if (monthNumber > 1 && monthNumber < 5) {
    headImage.src = "./Images/01.webp"
    // console.log('222222')
  } else if (monthNumber > 4 && monthNumber < 8) {
    headImage.src = "./Images/02.webp"
    // console.log('ffssfsfdsdfsdfsfasfa')
  } else {
    headImage.src = "./Images/03.webp"
    // console.log('YRAAAAAAAAAAAAAAAA')
  }

}



function renderWeekNames() {
  const tr = document.createElement('tr')
  tr.className = 'weeks-row'


  for (let i = 0; i < 7; i++) {
    const td = document.createElement('td')
    td.innerHTML = weekNames[i]
    td.align = 'center'
    td.className = 'week-names'
    tr.appendChild(td)
  }

          
  tbody.appendChild(tr)
}



// TYT PEREROBLJAY FUNKCIY

function renderCal() {
    let day = 1;
    let nextMonthDay = 1;

    const firstDay = getFirstDayOfMonth(tempDate.getFullYear(), tempDate.getMonth()).getDay();
    function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
    }

    const monthLength = daysInMonth(tempDate.getFullYear(), tempDate.getMonth() + 1);

    let prevMonthLength = prevDaysInMonth(tempDate.getFullYear(), tempDate.getMonth());    
    let prevMonth = prevMonthLength - (firstDay - 2);
        
        function prevDaysInMonth(year, month) {
          return new Date(year, month, 0).getDate();
        }

        // console.log(prevDaysInMonth(tempDate.getFullYear(), tempDate.getMonth()))

        function daysInMonth(year, month) {
          return new Date(year, month, 0).getDate();
        }

        // console.log(daysInMonth(tempDate.getFullYear(), tempDate.getMonth() + 1))

  

    

    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr')
  
      for (let j = 0; j < 7; j++) {        
            const td = document.createElement('td')          

            if (j < firstDay - 1 && i < 1) {
                td.innerHTML = prevMonth++;
            } else if (j >= firstDay - 1 && i < 1) {
                td.innerHTML = day++;
                td.style.background = 'rgb(241 241 241)' 
            } else if (i >= 1 && day <= monthLength) {
                td.innerHTML = day++;
                td.style.background = 'rgb(241 241 241)'
            } else if (day >= monthLength) {
                td.innerHTML = nextMonthDay++;
            } 
        tr.appendChild(td)        
        tbody.appendChild(tr)
          if (day === new Date().getDate() + 1 && new Date().getMonth() === tempDate.getMonth() && new Date().getFullYear() === tempDate.getFullYear()) {
            td.style.background = 'rgb(208 208 208)'
            // console.log(new Date().getFullYear == tempDate.getFullYear());
          }
        }
    }
    // console.log(currentMonth)
  }

  
// function renderFoot() {
//   const tfoot = document.createElement('tfoot')
//   const tr = document.createElement('tr')
//   const tdLeft = document.createElement('td')
//   const tdRight = document.createElement('td')
//   const buttonPrev = document.createElement('button')
//   const buttonNext = document.createElement('button')

//   buttonPrev.innerHTML = 'Prev'
//   buttonNext.innerHTML = 'Next'

//   tr.appendChild(tdLeft)
//   tr.appendChild(tdRight)

//   tdLeft.colSpan = 3
//   tdRight.colSpan = 4
//   tdRight.align = 'right'

//   tdLeft.appendChild(buttonPrev)
//   tdRight.appendChild(buttonNext)
//   tfoot.appendChild(tr)
//   table.appendChild(tfoot)

// TYTYTYYTYT



