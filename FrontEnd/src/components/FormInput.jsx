import React from 'react'

function FormInput({ id, label, type = 'text', placeholder, name, value, onChange, icon: Icon }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[#0b1c30]">{label}</label>
      <div className="relative">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737686]" />
        ) : null}
        <input
          id={id}
          name={name || id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl border border-[#c3c6d7] bg-[#f8f9ff] py-3 text-[#0b1c30] placeholder:text-[#737686] outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#b4c5ff]/40 ${Icon ? 'pl-11 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  )
}

export default FormInput
