import { app } from ".";

const PORT = 3333;

app.listen(PORT, () =>
  console.log(
    `👀 Server http://localhost:${PORT}/api-docs is being watched - 'Quis custodiet ipsos custodes? 🤔'!`
  )
);
