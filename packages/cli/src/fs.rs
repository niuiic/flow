use std::{env, fs, io};

pub fn get_root() -> Result<String, io::Error> {
    let mut cur_dir = env::current_dir()?;

    loop {
        for entry in fs::read_dir(cur_dir.clone())? {
            if entry?.file_name().to_str().unwrap() == ".git" {
                return Ok(cur_dir.to_str().unwrap().to_string());
            }
        }

        if !cur_dir.pop() {
            break;
        }
    }

    Err(io::Error::new(io::ErrorKind::Other, "root not found"))
}
