const moment = require('moment')
const _ = require('lodash')

const book = 'Blind Spot: Hidden Biases of Good People'
const pages = 209
const startDate = moment('2017-05-24');
const dueDate = moment('2017-06-27')
const daysToFinish = dueDate.diff(startDate, 'days')
const pagesPerDay = pages / daysToFinish
const pageMap = mapPagestoDay(daysToFinish, pagesPerDay, startDate)

let now = moment()
let daysRemaining = dueDate.diff(now, 'days')
let curDay = daysToFinish - daysRemaining
let place = 39
let pagesRemaining = pages - place

let todayGoal = pageMap.find((goal) => goal.day === curDay)
let tomorrowGoal = pageMap.find((goal) => goal.day === (curDay + 1))
let status = checkStatus(todayGoal, tomorrowGoal, place, pagesPerDay, pages)

const obj = {
    book,
    pages,
    startDate: startDate.format('MMM DD, YYYY'),
    dueDate: dueDate.format('MMM DD, YYYY'),
    daysToFinish,
    pagesPerDay: `~${Math.round(pagesPerDay)}`,
    pageMap,
    now: now.format('MMM DD, YYYY'),
    daysRemaining,
    curDay,
    place,
    pagesRemaining,
    status
}

console.log(
    '\n',
    '-------------------------------------------------------------------------------------------\n',
    `| ${status}\n`,
    '-------------------------------------------------------------------------------------------\n',
    '\n',
    `${obj.book}\n`,
    `${obj.pages} pages\n`,
    `Days Remaining: ${obj.daysRemaining}\n`,
    `Pages Remaining: ${obj.pagesRemaining}\n`,
    `Started: ${obj.startDate}\n`,
    `Due Date: ${obj.dueDate}\n`,
    `Pages per day: ${obj.pagesPerDay}\n`,
    `Place: ${place}\n`
)

function mapPagestoDay(...params) {
    const [ daysToFinish, pagesPerDay, startDate ] = _.cloneDeep(params);
    const dayArr = buildDayArr(daysToFinish)
    let curPage = pagesPerDay

    return dayArr.reduce((arr, day) => {
        arr.push({
            date: startDate.format('MMM DD, YYYY'),
            pageGoal: Math.floor(curPage),
            day: day
        })
        curPage += pagesPerDay
        startDate.add(1, 'd')
        return arr
    }, [])
}

function buildDayArr(daysToFinish) {
    let dayArr = []
    let dayNum = 1

    do {
        dayArr.push(dayNum)
        dayNum++
    } while(dayNum <= daysToFinish)

    return dayArr
}

function checkStatus(today, tomorrow, place, pagesPerDay, pages) {
    const messages = {
        goalMet: 'You\'re right on target! Pick it up again tomorrow.',
        keepGoing: `You're on track! Read ${today.pageGoal - place} page(s) today up through page ${today.pageGoal} to stay on track.`,
        behind: `You're behind! Read [${Math.ceil(today.pageGoal - place)} page(s)] today up through [page ${today.pageGoal}] to catch up!`,
        ahead: `You're ahead of your daily goal! Time to relax ;)`,
        finished: 'Congratulations! You finished a book!'
    }

    switch (true) {
        case place === pages:
            return messages.finished
        case (place + pagesPerDay) < today.pageGoal:
            return messages.behind
        case place === today.pageGoal:
            return messages.goalMet
        case (today.pageGoal - place) > 0 &&  (today.pageGoal - place) <= Math.floor(pagesPerDay):
            return messages.keepGoing
        case place > today.pageGoal:
            return messages.ahead
    }
}
