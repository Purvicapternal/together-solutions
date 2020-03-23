const router = require('express').Router();
let list = require('../models/list');
 
router.route('/').get((req, res) => {
    list.find()
    .then(lists => res.json(lists))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const skill = req.body.skill;
  const client = req.body.client;
  const date = Date.parse(req.body.date);
  const name = req.body.name;
  const mobile =Number(req.body.mobile);
  const email = req.body.email;
  const location = req.body.location;
  const experience = req.body.experience;
  const current = req.body.current;
  const expected = req.body.expected;
  const notice = req.body.notice;
  const status1 = req.body.status1;
  const status2 = req.body.status2;

 
  const newcandidate = new list({
    skill,
    client,
    date,
    name,
    mobile,
    email,
    location,
    experience,
    current,
    expected,
    notice,
    status1,
    status2
  });

  newcandidate.save()
  .then(() => res.json('Candidate added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  list.findByIdAndDelete(req.params.id)
    .then(() => res.json('Candidate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  list.findById(req.params.id)
    .then(lists => {
        lists.skill = req.body.skill;
        lists.client = req.body.client;
        lists.date = Date.parse(req.body.date);
        lists.name = req.body.name;
        lists.mobile =Number(req.body.mobile);
        lists.email = req.body.email;
        lists.location = req.body.location;
        lists.experience = req.body.experience;
        lists.current = req.body.current;
        lists.expected = req.body.expected;
        lists.notice = req.body.notice;
        lists.status1 = req.body.status1;
        lists.status2 = req.body.status2;
      

      lists.save()
        .then(() => res.json('Candidate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;