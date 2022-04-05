const router = require('express').Router();
var db = require('../../db/db.json');
const fs = require('fs');


const { confirmNote, newNote, findId } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    console.log(db);
    res.json(db);
});

router.get('/notes/:id', (req, res) => {
    const params = [req.params.id];
    const result = findId(req.params.id, db);
    console.log(result);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});


router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = db.length.toString();
      if(!confirmNote(req.body)) {
        res.status(400).send('Please format note correctly.');
    } else {
    const note = newNote(req.body, db);
    res.json(note);
    }
    
});

router.delete(`/notes/:id`, (req, res) => {
  
    var oldNotes = db;
    const newNotes = oldNotes.filter((n) => n.id !== req.params.id );
    console.log(newNotes);
    
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    db = newNotes;
    res.json(newNotes); 
});


module.exports = router;

