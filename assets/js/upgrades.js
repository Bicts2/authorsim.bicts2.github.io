import { save, calcGenerating, getUpgrade, setAvailUpgrades,
  setBonus, subtractTotal, errorAlert, setUniqueChance, setResearchRequirements } from './game.js'

const upgrade = (() => {
  // Create callback objects
  const upgrades = $.Callbacks()

  // Create shortcut variables to reduce typing
  let u
  let m
  let l
  let w
  let s
  let p
  let c
  let b
  let e
  const setVar = () => {
    u = save.upgrades
    m = save.monkeys
    l = save.letters
    w = save.words
    s = save.sentences
    p = save.pages
    c = save.chapters
    b = save.books
    e = save.encyclopedias
  }

  const upgradeError = () => {
    return errorAlert('Oh dear...', 'You are too poor to purchase this upgrade.')
  }

  return {
    // Checks regularly to fade in icon if upgrades are purchaseable
    check: () => {
      setVar()
      // If there are any upgrades, fade in global icon
      if (l.availableUpgrades +
          w.availableUpgrades +
          s.availableUpgrades +
          p.availableUpgrades +
          c.availableUpgrades +
          b.availableUpgrades !== 0) {
        $('#upgradeAvailable').fadeIn()
      } else {
        $('#upgradeAvailable').fadeOut()
      }
      // If there are upgrades, fade in the icon
      if (l.availableUpgrades !== 0) {
        $('#LettersUpgradeAvailable').fadeIn()
      } if (w.availableUpgrades !== 0) {
        $('#WordsUpgradeAvailable').fadeIn()
      } if (s.availableUpgrades !== 0) {
        $('#SentencesUpgradeAvailable').fadeIn()
      } if (p.availableUpgrades !== 0) {
        $('#PagesUpgradeAvailable').fadeIn()
      } if (c.availableUpgrades !== 0) {
        $('#ChaptersUpgradeAvailable').fadeIn()
      } if (b.availableUpgrades !== 0) {
        $('#BooksUpgradeAvailable').fadeIn()
      }
      // If there are no upgrades, fade out the icon
      if (l.availableUpgrades === 0) {
        $('#LettersUpgradeAvailable').fadeOut()
      } if (w.availableUpgrades === 0) {
        $('#WordsUpgradeAvailable').fadeOut()
      } if (s.availableUpgrades === 0) {
        $('#SentencesUpgradeAvailable').fadeOut()
      } if (p.availableUpgrades === 0) {
        $('#PagesUpgradeAvailable').fadeOut()
      } if (c.availableUpgrades === 0) {
        $('#ChaptersUpgradeAvailable').fadeOut()
      } if (b.availableUpgrades === 0) {
        $('#BooksUpgradeAvailable').fadeOut()
      }
    },
    setup: () => {
      setVar()
      if (u.writeWords) { $('#wordsManualSection').fadeIn() }
      if (u.writeSentences) { $('#sentencesManualSection').fadeIn() }
      if (u.writePages) { $('#pagesManualSection').fadeIn() }
      if (u.writeChapters) { $('#chaptersManualSection').fadeIn() }
      if (u.writeBooks) { $('#booksManualSection').fadeIn() }
      if (u.researcher) { $('#EncyclopediasMenu').fadeIn() }
    },

    //
    // Letter Upgrades
    //

    writeWords: () => {
      setVar()
      if (l.total >= 238 && !u.writeWords) {
        $('#WriteWords').fadeOut()        // Fade out button
        getUpgrade('writeWords')          // Set upgrade to purchased
        subtractTotal('letters', 238)      // Deduct cost
        setAvailUpgrades('letters', '-')     // Deduct purchaseable upgrade
        $('#wordsManualSection').fadeIn() // Fade in purchased section
      } else if (l.total < 238) {
        upgradeError()
      }
    },

    fasterLetters: () => {
      setVar()
      if (l.total >= 1225 && !u.fasterLetters) {
        $('#FasterLetters').fadeOut()
        getUpgrade('fasterLetters')
        subtractTotal('letters', 1225)
        setAvailUpgrades('letters', '-')
        setBonus('letters', 'timer', 0.5)
        calcGenerating('letters')
      } else if (l.total < 1225) {
        upgradeError()
      }
    },

    efficientMonkeys: () => {
      setVar()
      if (l.total >= 525 && !u.efficientMonkeys) {
        $('#EfficientMonkeys').fadeOut()
        getUpgrade('efficientMonkeys')
        subtractTotal('letters', 525)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 1.1)
        calcGenerating('letters')
      } else if (l.total < 525) {
        upgradeError()
      }
    },

    monkeyIntelligenceI: () => {
      setVar()
      if (l.total >= 2450 && !u.monkeyIntelligenceI) {
        $('#MonkeyIntelligenceI').fadeOut()
        getUpgrade('monkeyIntelligenceI')
        subtractTotal('letters', 2450)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 1.2)
        calcGenerating('letters')
      } else if (l.total < 2450) {
        upgradeError()
      }
    },

    monkeyIntelligenceII: () => {
      setVar()
      if (l.total >= 5425 && !u.monkeyIntelligenceII) {
        $('#MonkeyIntelligenceII').fadeOut()
        getUpgrade('monkeyIntelligenceII')
        subtractTotal('letters', 5425)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 1.25)
        calcGenerating('letters')
      } else if (l.total < 5425) {
        upgradeError()
      }
    },

    monkeyIntelligenceBreakthrough: () => {
      setVar()
      if (l.total >= 15400 && !u.monkeyIntelligenceBreakthrough) {
        $('#MonkeyIntelligenceBreakthrough').fadeOut()
        getUpgrade('monkeyIntelligenceBreakthrough')
        subtractTotal('letters', 15400)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 2.0)
        calcGenerating('letters')
      } else if (l.total < 15400) {
        upgradeError()
      }
    },

    monkeyGlasses: () => {
      setVar()
      if (l.total >= 23800 && !u.monkeyGlasses) {
        $('#MonkeyGlasses').fadeOut()
        getUpgrade('monkeyGlasses')
        subtractTotal('letters', 23800)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 2.5)
        calcGenerating('letters')
      } else if (l.total < 23800) {
        upgradeError()
      }
    },

    smarterLetters: () => {
      setVar()
      if (l.total >= 3500 && !u.smarterLetters) {
        $('#SmarterLetters').fadeOut()
        getUpgrade('smarterLetters')
        subtractTotal('letters', 3500)
        setAvailUpgrades('letters', '-')
        setBonus('letters', 'multiplier', 1.1)
        calcGenerating('letters')
      } else if (l.total < 3500) {
        upgradeError()
      }
    },

    tooManyLetters: () => {
      setVar()
      if (l.total >= 35000 && !u.tooManyLetters) {
        $('#TooManyLetters').fadeOut()
        getUpgrade('tooManyLetters')
        subtractTotal('letters', 35000)
        setAvailUpgrades('letters', '-')
        setBonus('words', 'multiplier', 3.0)
        calcGenerating('words')
      } else if (l.total < 35000) {
        upgradeError()
      }
    },

    anotherFinger: () => {
      setVar()
      if (l.total >= 61250 && !u.anotherFinger) {
        $('#AnotherFinger').fadeOut()
        getUpgrade('anotherFinger')
        subtractTotal('letters', 61250)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 1.20)
        calcGenerating('letters')
      } else if (l.total < 61250) {
        upgradeError()
      }
    },

    thirdArm: () => {
      setVar()
      if (l.total >= 168000 && !u.thirdArm) {
        $('#ThirdArm').fadeOut()
        getUpgrade('thirdArm')
        subtractTotal('letters', 168000)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 1.33)
        calcGenerating('letters')
      } else if (l.total < 168000) {
        upgradeError()
      }
    },

    strangeLanguage: () => {
      setVar()
      if (l.total >= 350000 && !u.strangeLanguage) {
        $('#StrangeLanguage').fadeOut()
        getUpgrade('strangeLanguage')
        subtractTotal('letters', 350000)
        setAvailUpgrades('letters', '-')
        setBonus('monkeys', 'multiplier', 1.50)
        calcGenerating('letters')
      } else if (l.total < 350000) {
        upgradeError()
      }
    },

    //
    // Word Upgrades
    //

    writeSentences: () => {
      setVar()
      if (w.total >= 60 && !u.writeSentences) {
        $('#WriteSentences').fadeOut()
        getUpgrade('writeSentences')
        subtractTotal('words', 60)
        setAvailUpgrades('words', '-')
        $('#sentencesManualSection').fadeIn()
      } else if (w.total < 60) {
        upgradeError()
      }
    },

    fasterWords: () => {
      setVar()
      if (w.total >= 50 && !u.fasterWords) {
        $('#FasterWords').fadeOut()
        getUpgrade('fasterWords')
        subtractTotal('words', 50)
        setAvailUpgrades('words', '-')
        setBonus('words', 'timer', 0.7)
        calcGenerating('words')
      } else if (w.total < 50) {
        upgradeError()
      }
    },

    efficientWords: () => {
      setVar()
      if (l.total >= 2900 && !u.efficientWords) {
        $('#EfficientWords').fadeOut()
        getUpgrade('efficientWords')
        subtractTotal('letters', 2900)
        setAvailUpgrades('letters', '-')
        setBonus('words', 'cost', 0.9)
        calcGenerating('words')
      } else if (l.total < 2900) {
        upgradeError()
      }
    },

    wordWhiz: () => {
      setVar()
      if (w.total >= 200 && !u.wordWhiz) {
        $('#WordWhiz').fadeOut()
        getUpgrade('wordWhiz')
        subtractTotal('words', 200)
        setAvailUpgrades('words', '-')
        setBonus('words', 'multiplier', 1.15)
        calcGenerating('words')
      } else if (w.total < 200) {
        upgradeError()
      }
    },

    wordOfWisdom: () => {
      setVar()
      if (w.total >= 1100 && !u.wordOfWisdom) {
        $('#WordOfWisdom').fadeOut()
        getUpgrade('wordOfWisdom')
        subtractTotal('words', 1100)
        setAvailUpgrades('words', '-')
        setBonus('words', 'multiplier', 1.5)
        calcGenerating('words')
      } else if (w.total < 1100) {
        upgradeError()
      }
    },

    gettingTheHangOfIt: () => {
      setVar()
      if (w.total >= 600 && !u.gettingTheHangOfIt) {
        $('#GettingTheHangOfIt').fadeOut()
        getUpgrade('gettingTheHangOfIt')
        subtractTotal('words', 600)
        setAvailUpgrades('words', '-')
        setBonus('words', 'timer', 0.5)
        calcGenerating('words')
      } else if (w.total < 600) {
        upgradeError()
      }
    },

    sticksAndStones: () => {
      setVar()
      if (w.total >= 2200 && !u.sticksAndStones) {
        $('#SticksAndStones').fadeOut()
        getUpgrade('sticksAndStones')
        subtractTotal('words', 2200)
        setAvailUpgrades('words', '-')
        setBonus('words', 'cost', 1.2)
        setBonus('words', 'multiplier', 1.5)
        calcGenerating('words')
      } else if (w.total < 2200) {
        upgradeError()
      }
    },

    dimeADozen: () => {
      setVar()
      if (w.total >= 11000 && !u.dimeADozen) {
        $('#DimeADozen').fadeOut()
        getUpgrade('dimeADozen')
        subtractTotal('words', 11000)
        setAvailUpgrades('words', '-')
        setBonus('words', 'multiplier', 1.1)
        calcGenerating('words')
      } else if (w.total < 11000) {
        upgradeError()
      }
    },

    choiceWords: () => {
      setVar()
      if (w.total >= 16100 && !u.choiceWords) {
        $('#ChoiceWords').fadeOut()
        getUpgrade('choiceWords')
        subtractTotal('words', 16100)
        setAvailUpgrades('words', '-')
        setBonus('words', 'timer', 0.65)
        calcGenerating('words')
      } else if (w.total < 16100) {
        upgradeError()
      }
    },

    gobbeldyGook: () => {
      setVar()
      if (w.total >= 34000 && !u.gobbeldyGook) {
        $('#GobbeldyGook').fadeOut()
        getUpgrade('gobbeldyGook')
        subtractTotal('words', 34000)
        setAvailUpgrades('words', '-')
        setBonus('words', 'multiplier', 2.0)
        calcGenerating('words')
      } else if (w.total < 34000) {
        upgradeError()
      }
    },

    //
    // Sentence Upgrades
    //

    writePages: () => {
      setVar()
      if (s.total >= 100 && !u.writePages) {
        $('#WritePages').fadeOut()
        getUpgrade('writePages')
        subtractTotal('sentences', 100)
        setAvailUpgrades('sentences', '-')
        $('#pagesManualSection').fadeIn()
      } else if (s.total < 100) {
        upgradeError()
      }
    },

    fasterSentences: () => {
      setVar()
      if (s.total >= 50 && !u.fasterSentences) {
        $('#FasterSentences').fadeOut()
        getUpgrade('fasterSentences')
        subtractTotal('sentences', 50)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'timer', 0.75)
        calcGenerating('sentences')
      } else if (s.total < 50) {
        upgradeError()
      }
    },

    higherLearning: () => {
      setVar()
      if (s.total >= 210 && !u.higherLearning) {
        $('#HigherLearning').fadeOut()
        getUpgrade('higherLearning')
        subtractTotal('sentences', 210)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'multiplier', 1.15)
        calcGenerating('words')
      } else if (s.total < 210) {
        upgradeError()
      }
    },

    longerSentences: () => {
      setVar()
      if (s.total >= 300 && !u.longerSentences) {
        $('#LongerSentences').fadeOut()
        getUpgrade('longerSentences')
        subtractTotal('sentences', 300)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'cost', 1.1)
        setBonus('sentences', 'multiplier', 1.5)
        calcGenerating('sentences')
      } else if (s.total < 300) {
        upgradeError()
      }
    },

    evenFasterSentences: () => {
      setVar()
      if (s.total >= 170 && !u.evenFasterSentences) {
        $('#EvenFasterSentences').fadeOut()
        getUpgrade('evenFasterSentences')
        subtractTotal('sentences', 170)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'timer', 0.5)
        calcGenerating('sentences')
      } else if (s.total < 170) {
        upgradeError()
      }
    },

    letterTradeoff: () => {
      setVar()
      if (s.total >= 250 && !u.letterTradeoff) {
        $('#LetterTradeoff').fadeOut()
        getUpgrade('letterTradeoff')
        subtractTotal('sentences', 250)
        setAvailUpgrades('sentences', '-')
        setBonus('letters', 'multiplier', 0.9)
        setBonus('sentences', 'multiplier', 1.3)
        calcGenerating('sentences')
        calcGenerating('letters')
      } else if (s.total < 250) {
        upgradeError()
      }
    },

    commonKnowledge: () => {
      setVar()
      if (s.total >= 420 && !u.commonKnowledge) {
        $('#CommonKnowledge').fadeOut()
        getUpgrade('commonKnowledge')
        subtractTotal('sentences', 420)
        setAvailUpgrades('sentences', '-')
        setBonus('pages', 'timer', 0.5)
        calcGenerating('pages')
      } else if (s.total < 420) {
        upgradeError()
      }
    },

    repeatingPatterns: () => {
      setVar()
      if (s.total >= 1000 && !u.repeatingPatterns) {
        $('#RepeatingPatterns').fadeOut()
        getUpgrade('repeatingPatterns')
        subtractTotal('sentences', 1000)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'multiplier', 1.35)
        setBonus('sentences', 'timer', 0.75)
        calcGenerating('sentences')
      } else if (s.total < 1000) {
        upgradeError()
      }
    },

    biggerFontSize: () => {
      setVar()
      if (s.total >= 2700 && !u.biggerFontSize) {
        $('#BiggerFontSize').fadeOut()
        getUpgrade('biggerFontSize')
        subtractTotal('sentences', 2700)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'timer', 0.70)
        calcGenerating('sentences')
      } else if (s.total < 2700) {
        upgradeError()
      }
    },

    letterSpacing: () => {
      setVar()
      if (s.total >= 3800 && !u.letterSpacing) {
        $('#LetterSpacing').fadeOut()
        getUpgrade('letterSpacing')
        subtractTotal('sentences', 3800)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'multiplier', 1.60)
        calcGenerating('sentences')
      } else if (s.total < 3800) {
        upgradeError()
      }
    },

    spinningSentences: () => {
      setVar()
      if (s.total >= 3200 && !u.spinningSentences) {
        $('#SpinningSentences').fadeOut()
        getUpgrade('spinningSentences')
        subtractTotal('sentences', 3200)
        setAvailUpgrades('sentences', '-')
        setBonus('sentences', 'multiplier', 2.00)
        calcGenerating('sentences')
      } else if (s.total < 3200) {
        upgradeError()
      }
    },

    //
    // Page Upgrades
    //

    writeChapters: () => {
      setVar()
      if (p.total >= 900 && !u.writeChapters) {
        $('#WriteChapters').fadeOut()
        getUpgrade('writeChapters')
        subtractTotal('pages', 900)
        setAvailUpgrades('pages', '-')
        $('#chaptersManualSection').fadeIn()
      } else if (p.total < 900) {
        upgradeError()
      }
    },

    jumpOffThePage: () => {
      setVar()
      if (p.total >= 135 && !u.jumpOffThePage) {
        $('#JumpOffThePage').fadeOut()
        getUpgrade('jumpOffThePage')
        subtractTotal('pages', 135)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'multiplier', 1.10)
        calcGenerating('pages')
      } else if (p.total < 135) {
        upgradeError()
      }
    },

    fasterPages: () => {
      setVar()
      if (p.total >= 225 && !u.fasterPages) {
        $('#FasterPages').fadeOut()
        getUpgrade('fasterPages')
        subtractTotal('pages', 225)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'timer', 0.80)
        calcGenerating('pages')
      } else if (p.total < 225) {
        upgradeError()
      }
    },

    smallerMargins: () => {
      setVar()
      if (p.total >= 450 && !u.smallerMargins) {
        $('#SmallerMargins').fadeOut()
        getUpgrade('smallerMargins')
        subtractTotal('pages', 450)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'multiplier', 1.25)
        setBonus('pages', 'cost', 1.10)
        calcGenerating('pages')
      } else if (p.total < 450) {
        upgradeError()
      }
    },

    trickleEffect: () => {
      setVar()
      if (p.total >= 1050 && !u.trickleEffect) {
        $('#TrickleEffect').fadeOut()
        getUpgrade('trickleEffect')
        subtractTotal('pages', 1050)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'multiplier', 1.20)
        setBonus('sentences', 'multiplier', 1.10)
        setBonus('words', 'multiplier', 1.05)
        setBonus('letters', 'multiplier', 1.025)
        calcGenerating('all')
      } else if (p.total < 1050) {
        upgradeError()
      }
    },

    tripleSpacing: () => {
      setVar()
      if (p.total >= 2400 && !u.tripleSpacing) {
        $('#TripleSpacing').fadeOut()
        getUpgrade('tripleSpacing')
        subtractTotal('pages', 2400)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'timer', 0.66)
        calcGenerating('pages')
      } else if (p.total < 2400) {
        upgradeError()
      }
    },

    hugeMargins: () => {
      setVar()
      if (p.total >= 3000 && !u.hugeMargins) {
        $('#HugeMargins').fadeOut()
        getUpgrade('hugeMargins')
        subtractTotal('pages', 3000)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'multiplier', 1.25)
        calcGenerating('pages')
      } else if (p.total < 3000) {
        upgradeError()
      }
    },

    paragraphSpacing: () => {
      setVar()
      if (p.total >= 3600 && !u.paragraphSpacing) {
        $('#ParagraphSpacing').fadeOut()
        getUpgrade('paragraphSpacing')
        subtractTotal('pages', 3600)
        setAvailUpgrades('pages', '-')
        setBonus('pages', 'timer', 0.70)
        calcGenerating('pages')
      } else if (p.total < 3600) {
        upgradeError()
      }
    },

    //
    // Chapter Upgrades
    //

    writeBooks: () => {
      setVar()
      if (c.total >= 600 && !u.writeBooks) {
        $('#WriteBooks').fadeOut()
        getUpgrade('writeBooks')
        subtractTotal('chapters', 600)
        setAvailUpgrades('chapters', '-')
        $('#booksManualSection').fadeIn()
      } else if (c.total < 600) {
        upgradeError()
      }
    },

    fasterChapters: () => {
      setVar()
      if (c.total >= 6 && !u.fasterChapters) {
        $('#FasterChapters').fadeOut()
        getUpgrade('fasterChapters')
        subtractTotal('chapters', 6)
        setAvailUpgrades('chapters', '-')
        setBonus('chapters', 'timer', 0.70)
      } else if (c.total < 6) {
        upgradeError()
      }
    },

    shareTheLove: () => {
      setVar()
      if (c.total >= 44 && !u.shareTheLove) {
        $('#ShareTheLove').fadeOut()
        getUpgrade('shareTheLove')
        subtractTotal('chapters', 44)
        setAvailUpgrades('chapters', '-')
        setBonus('books', 'timer', 0.80)
        setBonus('chapters', 'timer', 0.80)
        setBonus('pages', 'timer', 0.80)
        setBonus('sentences', 'timer', 0.80)
        setBonus('words', 'timer', 0.80)
        setBonus('letters', 'timer', 0.80)
        calcGenerating('all')
      } else if (c.total < 44) {
        upgradeError()
      }
    },

    chapterADay: () => {
      setVar()
      if (c.total >= 66 && !u.chapterADay) {
        $('#ChapterADay').fadeOut()
        getUpgrade('chapterADay')
        subtractTotal('chapters', 66)
        setAvailUpgrades('chapters', '-')
        setBonus('pages', 'timer', 0.40)
      } else if (c.total < 66) {
        upgradeError()
      }
    },

    extraSpace: () => {
      setVar()
      if (c.total >= 132 && !u.extraSpace) {
        $('#ExtraSpace').fadeOut()
        getUpgrade('extraSpace')
        subtractTotal('chapters', 132)
        setAvailUpgrades('chapters', '-')
        setBonus('chapters', 'multiplier', 1.30)
      } else if (c.total < 132) {
        upgradeError()
      }
    },

    //
    // Book Upgrades
    //

    researcher: () => {
      setVar()
      if (b.total >= 3 && !u.researcher) {
        $('#Researcher').fadeOut()
        getUpgrade('researcher')
        subtractTotal('books', 3)
        setAvailUpgrades('books', '-')
        $('#EncyclopediasMenu').fadeIn()
        setResearchRequirements()
      } else if (b.total < 3) {
        upgradeError()
      }
    },

    //
    // Encyclopedia Learning Opportunities
    //

    monkeyMutation: () => {
      setVar()
      if (e.total >= 1 && !u.monkeyMutation) {
        $('#MonkeyMutation').fadeOut()
        getUpgrade('monkeyMutation')
        subtractTotal('encyclopedias', 1)
        setUniqueChance(0.004, 'set')
      } else if (e.total < 1) {
        upgradeError()
      }
    },

    burdenOfKnowledge: () => {
      setVar()
      if (e.total >= 2 && !u.burdenOfKnowledge) {
        $('#BurdenOfKnowledge').fadeOut()
        getUpgrade('burdenOfKnowledge')
        subtractTotal('encyclopedias', 2)
        setBonus('books', 'cost', 1.50)
        setBonus('chapters', 'cost', 1.50)
        setBonus('pages', 'cost', 1.50)
        setBonus('sentences', 'cost', 1.50)
        setBonus('words', 'cost', 1.50)
        setUniqueChance(3.00)
      } else if (e.total < 2) {
        upgradeError()
      }
    },
  }
})()
export default upgrade
