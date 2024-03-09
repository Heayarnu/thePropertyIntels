function ErrorMessageCtn({ children }) {
  return (
    <span className="text-[red] text-[.7rem] absolute left-[0.94rem] bottom-[-15px] whitespace-nowrap">
      {children}
    </span>
  );
}

export default ErrorMessageCtn;
