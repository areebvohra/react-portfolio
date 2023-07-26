import React, { Component } from 'react';

const months = ["#fc4160", "#8c41fc", "#41d3fc", "#418ffc"];
class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map((education) => (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p>
        </div>
      ))
      var work = this.props.data.work.map((work) => (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      ))
      var skills = this.props.data.skills
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p style={{ fontWeight: 'bold', color: '#313131', fontSize: 18 }}>{skillmessage}</p>
            {
              skills && skills.map((item, index) => {
                var randomNumber = Math.floor(Math.random() * months.length);
                return (
                  <div key={index} style={{ background: months[randomNumber] }} className="tag">{item}</div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
