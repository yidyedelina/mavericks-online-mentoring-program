import React,{useState} from 'react'


const MentorRating = () => {
  const [mentor, setMentor] = useState("");
  const [communication, setCommunication] = useState(0);
  const [knowledge, setKnowledge] = useState(0);
  const [availability, setAvailability] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleMentorChange = (e) => {
    setMentor(e.target.value);
  };

  const handleCommunicationChange = (e) => {
    setCommunication(parseInt(e.target.value));
  };

  const handleKnowledgeChange = (e) => {
    setKnowledge(parseInt(e.target.value));
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(parseInt(e.target.value));
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to server
    // console.log({
    //   mentor,
    //   communication,
    //   knowledge,
    //   availability,
    //   feedback,
    // });
    // Reset form
    setMentor("");
    setCommunication(0);
    setKnowledge(0);
    setAvailability(0);
    setFeedback("");
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-medium text-cyan-700 mb-4">
      Rate Your Mentor
    </h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="mentor"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Mentor
        </label>
        <select
          id="mentor"
          name="mentor"
          value={mentor}
          onChange={handleMentorChange}
          className="bg-cyan-100 border border-cyan-200 rounded-md px-3 py-2 w-full text-sm"
        >
          <option value="">Select Mentor</option>
          <option value="mentor1">Mentor 1</option>
          <option value="mentor2">Mentor 2</option>
          <option value="mentor3">Mentor 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="communication"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Communication
        </label>
        <input
          type="range"
          id="communication"
          name="communication"
          min="0"
          max="5"
          value={communication}
          onChange={handleCommunicationChange}
          className="w-full"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">0</span>
          <span className="text-sm text-gray-600">5</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="knowledge"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Knowledge
        </label>
        <input
          type="range"
          id="knowledge"
          name="knowledge"
          min="0"
          max="5"
          value={knowledge}
          onChange={handleKnowledgeChange}
          className="w-full"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">0</span>
          <span className="text-sm text-gray-600">5</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="availability"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Availability
        </label>
        <input
          type="range"
          id="availability"
          name="availability"
          min="0"
          max="5"
          value={availability}
          onChange={handleAvailabilityChange}
          className="w-full"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">0</span>
          <span className="text-sm text-gray-600">5</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="feedback"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Feedback
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows="3"
          value={feedback}
          onChange={handleFeedbackChange}
          className="bg-cyan-100 border border-cyan-200 rounded-md px-3 py-2 w-full text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-cyan-700 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  </div>
    
  )
}

export default MentorRating

