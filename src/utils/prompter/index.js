import promptImport from "prompt-sync";

const prompt = promptImport({sigint: true});

const prompter = (message = "LDF $ ") => {
  return prompt(message);
}

export default prompter;