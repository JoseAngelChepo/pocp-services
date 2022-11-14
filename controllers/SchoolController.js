module.exports = {
  create: (schoolService, asyncError) => asyncError(async (req, res) => {
    const dataSchool = { ...req.body }
    const school = await schoolService.create(dataSchool);
    return res.status(201).json({ school });
  }),
  getSchoolById: (schoolService, asyncError) => asyncError(async (req, res) => {
    const school = await (
      await schoolService.findId(req.params.id)
    ).toObject();
    return res.status(200).json({ school });
  }),
  updateSchool: (schoolService, asyncError) => asyncError(async (req, res) => {
    school = await schoolService.updateSchoolById(req.body.id, req.body)
    return res.status(200).json({ status: 'success', school });
  }),
}