function Button({ text, onClick }) {
  return (
    <div>
    <Button onClick={onClick}>
      {text}
    </Button>
    </div>
  );
}

export default Button;
