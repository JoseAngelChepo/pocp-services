module.exports = {
  create: (studentService, asyncError) => asyncError(async (req, res) => {
    const dataUser = { ...req.body }
    const student = await studentService.create(dataUser);
    return res.status(201).json({ student });
  }),
  getStudentByAddress: (studentService, asyncError) => asyncError(async (req, res) => {
    const student = await (
      await studentService.findAddress(req.params.address)
    ).toObject();
    return res.status(200).json({ student });
  }),
  getStudentByEmail: (studentService, asyncError) => asyncError(async (req, res) => {
    const student = await (
      await studentService.findEmail(req.params.email)
    ).toObject();
    return res.status(200).json({ student });
  }),
  getStudentById: (studentService, asyncError) => asyncError(async (req, res) => {
    const student = await (
      await studentService.findId(req.params.id)
    ).toObject();
    return res.status(200).json({ student });
  }),
  updateStudent: (studentService, asyncError) => asyncError(async (req, res) => {
    student = await studentService.updateStudentById(req.body.id, req.body)
    return res.status(200).json({ status: 'success', student });
  }),
  mintPocc: (studentService, poccService, asyncError) => asyncError(async (req, res) => {
    pocc = await poccService.findId(req.params.id)
    student = await studentService.findId(req.body.studentId)
    console.log('minting...')
    // llamar servicio de cesar
    console.log('adding pocc to student list...')
    const poccMintedRegister = {
      addressContract: 'test',
      tronscanReference: 'test',
    }
    student = await studentService.addPoccToStudentById(student._id, pocc, poccMintedRegister)
    return res.status(200).json({ status: 'minted' });
  }),
}