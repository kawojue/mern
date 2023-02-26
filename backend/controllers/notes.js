const Note = require('../model/Note')
const User = require('../model/User')
const asyncHandler = require('express-async-handler')

const getAllNotes = async(async (req, res) => {
    const notes = await Note.find().lean()
    if (!notes?.length) {
        return res.status.json({ message: "Empty notes."})
    }

    const notesWithUser = await Promise.all(notes.map(async note => {
        const user = await User.findById(note.user).lean().exec()
        return { ...note, user }
    }))

    res.json(notesWithUser)
})

const addNote = asyncHandler(async (req, res) => {

})

const editNote = asyncHandler(async (req, res) => {

})

const deleteNote = asyncHandler(async (req, res) => {

})

module.exports = {
    addNote, editNote,
    deleteNote, getAllNotes
}