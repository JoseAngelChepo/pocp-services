module.exports = {
  create: (teacherService, asyncError) => asyncError(async (req, res) => {
    const dataTeacher = { ...req.body }
    const teacher = await teacherService.create(dataTeacher);
    return res.status(201).json({ teacher });
  }),
  getTeacherById: (teacherService, asyncError) => asyncError(async (req, res) => {
    const teacher = await (
      await teacherService.findId(req.params.id)
    ).toObject();
    return res.status(200).json({ teacher });
  }),
  updateTeacher: (teacherService, asyncError) => asyncError(async (req, res) => {
    teacher = await teacherService.updaTeacherById(req.body.id, req.body)
    return res.status(200).json({ status: 'success', teacher });
  }),
}