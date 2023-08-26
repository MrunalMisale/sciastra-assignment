import React from 'react'
import UnivCard from './UnivCard';
import MentorContain from './MentorContain';
import LeadMentors from './LeadMentors';

function Body() {
    return (
        <div>
            <div className='mx-auto text-center font-medium text-4xl w-3/5 mt-32 mb-24 font-poppins'>
                <h1 className='bg-gradient-to-br from-[#9010b0] from-50% to-[#234EB0] text-transparent bg-clip-text'>Learn from scientists, research scholars from the top institutes in the world.</h1>
            </div>
            <UnivCard></UnivCard>
            <MentorContain></MentorContain>
            <LeadMentors ></LeadMentors>
        </div>
    )
}

export default Body;