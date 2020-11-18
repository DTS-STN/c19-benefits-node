const  getBenefits  = (data) => require('./getBenefits').getBenefits(data, {enableDtc: true})
const { getProvincialBenefits } = require('./getBenefits')

describe('Test the getBenefits calculator', () => {

  test("It checks ei regular + 5k or more + cerb exhausted + options that should lead to crb", () => {
    const noIncomeOptions = [
      "lost-job",
      "employer-closed",
      "self-employed-closed",
      "parental-recently-cant-return",
      "student_2019_20",
      "ei-recently-claim-ended",
    ]

    const someIncomeOptions = [
      "hours-reduced",
      "employed-lost-a-job",
      "selfemployed-some-income",
      "retired",
    ]

    const cases = ["no_income", "some_income"]

    cases.forEach((incomeCase) => {
      let dataBody = {}

      if(incomeCase === "no_income"){
        dataBody = {
          lost_job: "lost-all-income",
          cerb_exhausted: "cerb-exhausted-yes",
          gross_income: "over_5k",
        }
        noIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value
          const result = getBenefits(dataBody)
          expect(result).toContain("crb")
          expect(result).toContain("transition_to_ei")
          expect(result).not.toContain("cerb")
        })
      }
      else{
        dataBody = {
          lost_job: "lost-some-income",
          cerb_exhausted: "cerb-exhausted-yes",
          gross_income: "over_5k",
        }
        someIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crb")
          expect(result).not.toContain("cerb")
        })
      }
    })
  })

  test("It checks ei regular + 5k or more + cerb exhausted + options that should lead to crcb", () => {
    const noIncomeOptions = [
      'child-or-dependent-school-closed',
      'unpaid-leave-to-care',
    ]

    const someIncomeOptions = [
      'child-or-dependent-school-closed',
    ]

    const cases = ["no_income", "some_income"]

    cases.forEach((incomeCase) => {
      let dataBody = {}

      if(incomeCase === "no_income"){
        dataBody = {
          lost_job: "lost-all-income",
          cerb_exhausted: "cerb-exhausted-yes",
          gross_income: "over_5k",
        }
        noIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crcb")
          expect(result).toContain("transition_to_ei")
          expect(result).not.toContain("cerb")
        })
      }
      else{
        dataBody = {
          lost_job: "lost-some-income",
          cerb_exhausted: "cerb-exhausted-yes",
          gross_income: "over_5k",
        }
        someIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crcb")
          expect(result).not.toContain("cerb")
        })
      }
    })
  })

  test("It checks ei regular + 5k or more + cerb exhausted + options that should lead to crsb", () => {
    const noIncomeOptions = [
      'sick-or-quarantined',
    ]

    const someIncomeOptions = [
      'quarantine',
    ]

    const cases = ["no_income", "some_income"]

    cases.forEach((incomeCase) => {
      let dataBody = {}

      if(incomeCase === "no_income"){
        dataBody = {
          lost_job: "lost-all-income",
          gross_income: "over_5k",
          cerb_exhausted: "cerb-exhausted-yes",
        }
        noIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crsb")
          expect(result).toContain("transition_to_ei")
          expect(result).not.toContain("cerb")
        })
      }
      else{
        dataBody = {
          lost_job: "lost-some-income",
          gross_income: "over_5k",
          cerb_exhausted: "cerb-exhausted-yes",
        }
        someIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crsb")
          expect(result).not.toContain("cerb")
        })
      }
    })
  })

  test("It checks ei regular + 5k or more + cerb almost exhausted + options that should lead to crb", () => {
    const noIncomeOptions = [
      "lost-job",
      "employer-closed",
      "self-employed-closed",
      "parental-recently-cant-return",
      "student_2019_20",
      "ei-recently-claim-ended",
    ]

    const someIncomeOptions = [
      "hours-reduced",
      "employed-lost-a-job",
      "selfemployed-some-income",
      "retired",
    ]

    const cases = ["no_income", "some_income"]

    cases.forEach((incomeCase) => {
      let dataBody = {}

      if(incomeCase === "no_income"){
        dataBody = {
          lost_job: "lost-all-income",
          cerb_exhausted: "cerb-exhausted-almost",
          gross_income: "over_5k",
        }
        noIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crb")
          expect(result).toContain("cerb")
          expect(result).toContain("transition_to_ei")
        })
      }
      else{
        dataBody = {
          lost_job: "lost-some-income",
          cerb_exhausted: "cerb-exhausted-almost",
          gross_income: "over_5k",
        }
        someIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crb")
          expect(result).toContain("cerb")
        })
      }
    })
  })

  test("It checks ei regular + 5k or more + cerb almost exhausted + options that should lead to crcb", () => {
    const noIncomeOptions = [
      'child-or-dependent-school-closed',
      'unpaid-leave-to-care',
    ]

    const someIncomeOptions = [
      'child-or-dependent-school-closed',
    ]

    const cases = ["no_income", "some_income"]

    cases.forEach((incomeCase) => {
      let dataBody = {}

      if(incomeCase === "no_income"){
        dataBody = {
          lost_job: "lost-all-income",
          gross_income: "over_5k",
          cerb_exhausted: "cerb-exhausted-almost",
        }
        noIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value
          console.log(dataBody)
          const result = getBenefits(dataBody)
          expect(result).toContain("crcb")
          expect(result).toContain("cerb")
          expect(result).toContain("transition_to_ei")
        })
      }
      else{
        dataBody = {
          lost_job: "lost-some-income",
          gross_income: "over_5k",
          cerb_exhausted: "cerb-exhausted-almost",
        }
        someIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value
          console.log(dataBody)
          const result = getBenefits(dataBody)
          expect(result).toContain("crcb")
          expect(result).toContain("cerb")
        })
      }
    })
  })

  test("It checks ei regular + 5k or more + cerb almost exhausted + options that should lead to crsb", () => {
    const noIncomeOptions = [
      'sick-or-quarantined',
    ]

    const someIncomeOptions = [
      'quarantine',
    ]

    const cases = ["no_income", "some_income"]

    cases.forEach((incomeCase) => {
      let dataBody = {}

      if(incomeCase === "no_income"){
        dataBody = {
          lost_job: "lost-all-income",
          gross_income: "over_5k",
          cerb_exhausted: "cerb-exhausted-almost",
        }
        noIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crsb")
          expect(result).toContain("transition_to_ei")
          expect(result).toContain("cerb")
        })
      }
      else{
        dataBody = {
          lost_job: "lost-some-income",
          gross_income: "over_5k",
          cerb_exhausted: "cerb-exhausted-almost",
        }
        someIncomeOptions.forEach((value) => {
          dataBody[incomeCase] = value

          const result = getBenefits(dataBody)
          expect(result).toContain("crsb")
          expect(result).toContain("cerb")
        })
      }
    })
  })

  test("lost all income + 4999 or less + cerb exhausted + should only show EI", () => {
    const options = [
      'lost-job','employer-closed','self-employed-closed',
      'unpaid-leave-to-care',
      'sick-or-quarantined', 'parental-recently-cant-return',
      'child-or-dependent-school-closed',
      'student_2019_20',
      'ei-recently-claim-ended',
      'none-of-the-above',
    ]

    options.forEach((value) => {
      const dataBody = {
        lost_job: "lost-all-income",
        no_income: value,
        gross_income: "4999-or-less",
      }

      const result = getBenefits(dataBody)
      expect(result.length).toBe(1)
      expect(result).toContain("transition_to_ei")
    })
  })

  test("lost some income + reduced income + 4999 or less shows ei + ei work sharing ", () => {
    const result = getBenefits(
      {
        lost_job: "lost-some-income",
        some_income: "hours-reduced",
        gross_income: "4999_or_less",
      },
    )

    expect(result.length).toBe(2)
    expect(result).toContain("transition_to_ei")
    expect(result).toContain("ei_workshare")
  })

  test("lost some income + all other options + 499 or less shows ei only", () => {
    const options = [
        'selfemployed-some-income',
        'employed-lost-a-job',
        'retired',
        'quarantine',
        'child-or-dependent-school-closed',
        'none-of-the-above',
    ]

    options.forEach((value) => {
      const dataBody = {
        lost_job: "lost-some-income",
        no_income: value,
        gross_income: "4999-or-less",
      }

      const result = getBenefits(dataBody)
      expect(result.length).toBe(1)
      expect(result).toContain("transition_to_ei")
    })


  })

  test("lost some income + reduced income + 5000 or more", () => {
    const result = getBenefits(
      {
        lost_job: "lost-some-income",
        some_income: "hours-reduced",
        gross_income: "over_5k",
      },
    )

    expect(result.length).toBe(3)
    expect(result).toContain("transition_to_ei")
    expect(result).toContain("ei_workshare")
    expect(result).toContain("crb")
  })

  test("It checks cerb addon", () => {
    const resultCerbExhausted = getBenefits(
      {
        cerb_exhausted: "cerb-exhausted-yes",
      },
    )

    expect(resultCerbExhausted.length).toBe(0)

    const resultCerbExhaustedAlmost = getBenefits(
      {
        cerb_exhausted: "cerb-exhausted-almost",
      },
    )
    expect(resultCerbExhaustedAlmost).toContain("cerb")

    const resultCerbNotExhausted = getBenefits(
      {
        cerb_exhausted: "cerb-exhausted-no",
      },
    )
    expect(resultCerbNotExhausted).toContain("cerb")
  })

  test('It checks the mortgage addon', () => {
    const result = getBenefits({
      mortgage_payments: 'yes-mortgage',
    })

    expect(result).toContain('mortgage_deferral')
  })

  test('It checks the rent addon', () => {
    const result = getBenefits({
      mortgage_payments: 'yes-rent',
    })

    expect(result).toContain('rent_help')
  })

  test('It checks the rrif addon', () => {
    const expected = ['rrif']

    const result = getBenefits({
      rrif: 'yes',
    })

    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('It checks the student debt addon', () => {
    const result = getBenefits({
      student_debt: 'yes',
    })

    expect(result).toContain('student_loan')
  })

  test('It checks for student financial aid', () => {
    const result = getBenefits({
      plans_for_school: 'yes',
    })

    expect(result).toContain('student_financial_aid')
  })


  test('It checks provincial benefits', () => {
    const provinces = ['ab', 'bc', 'mb', 'nb', 'nl', 'ns', 'nt', 'nu', 'on', 'pe', 'qc', 'sk', 'yt']

    provinces.forEach((province) => {
      const result = getProvincialBenefits({
        province: province,
      })

      expect(result).toContain('province-' + province)
    })
  })
})