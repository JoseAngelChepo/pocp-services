module.exports = {
  create: (poccService, teacherService, asyncError) => asyncError(async (req, res) => {
    const dataPocc = { ...req.body }
    const pocc = await poccService.create(dataPocc);
    console.log('creating pocc in tron')
    const poccMintedRegister = {
      nftPoccAddress: 'test',
    }
    const teacher = await teacherService.addPoccToTeacherById(dataPocc.creator, pocc, poccMintedRegister)
    return res.status(201).json({ pocc });
  }),
  getPoccById: (poccService, asyncError) => asyncError(async (req, res) => {
    const pocc = await (
      await poccService.findId(req.params.id)
    ).toObject();
    return res.status(200).json({ pocc });
  }),
  updatePocc: (poccService, asyncError) => asyncError(async (req, res) => {
    pocc = await poccService.updatePoccById(req.body.id, req.body)
    return res.status(200).json({ status: 'success', pocc });
  }),
}