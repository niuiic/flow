use std::{
    fs::File,
    io::{Error, Read, Write},
};

pub fn trans_to_absolute_path(before: &str, after: &str, file_path: &str) -> Result<(), Error> {
    let mut file = File::open(file_path)?;
    let mut text = String::new();
    file.read_to_string(&mut text)?;

    text = text.replace(before, after);

    file = File::create(file_path)?;
    file.write_all(text.as_bytes())?;

    Ok(())
}
