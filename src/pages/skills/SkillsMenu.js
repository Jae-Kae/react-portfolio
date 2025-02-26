import React, { useState } from 'react'
import classNames from 'classnames'
import skills from './skillsData.js'
import '../../styles/skillsMenu.css'
import frontendIcon from '../../assets/eagle-emblem.png'
import backendIcon from '../../assets/hawk-emblem.png'

const SkillsMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1)

  const menuItems = ['FRONT-END', 'BACK-END']
  const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon

  const renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className={`skill-sub-container-${activeMenuItem}`}>
        <h3>{skill.title}</h3>
        <div className='level-container'>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? 'filled' : 'unfilled'
              }`}
            />
          ))}
        </div>
      </div>
    ))
  }

  return (
    <div className='skill-menu'>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={classNames('skill-item', {
            activeSkill: activeMenuItem === index + 1,
          })}
          onClick={() => setActiveMenuItem(index + 1)}
        >
          <h2 className='skill-title'>{item}</h2>
        </div>
      ))}
      <img className='skill-icon' src={currentIcon} alt='current skill' />
      <div className='skill-sub-container'>
        {renderContent(skills[activeMenuItem])}
      </div>
    </div>
  )
}

export default SkillsMenu
