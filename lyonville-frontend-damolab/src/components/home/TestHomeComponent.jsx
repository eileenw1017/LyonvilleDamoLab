export const TestHomeComponent = ({ title, description, className }) => {
  return (
    <div>
      <div>
        <div className="max-w-md">
          <h1 className={className}>{title}</h1>
          <p className={className}>{description}</p>
        </div>
      </div>
    </div>
  )
}
