const functionsExtra = {}

const getReferralToken = () => {
  const st = Math.random().toString(36).slice(2)
  return st.toUpperCase()
}

functionsExtra.checkUniqueReferralToken = async (poccService) => {
  const referralToken = getReferralToken()
  const waiter = await poccService.findByReferralToken(referralToken)
  if (!waiter) {
    return referralToken
  } else {
    functionsExtra.checkUniqueReferralToken(poccService)
  }
}

module.exports = functionsExtra
