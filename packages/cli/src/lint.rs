use std::fs;

pub fn check_test(src_dir: &str, test_dir: &str, modules: Vec<String>) -> Result<(), String> {
    let module_test_path = |module: &str| -> String {
        module
            .replace(src_dir, test_dir)
            .replace(".ts", ".spec.ts")
            .to_string()
    };

    let no_test_modules: Vec<&str> = modules
        .iter()
        .filter(|module| {
            if let Some(_) = module.find("index.ts") {
                return false;
            }

            if let Some(_) = module.find("types") {
                return false;
            }

            if let Ok(metadata) = fs::metadata(module_test_path(module)) {
                if metadata.is_file() {
                    return false;
                }
            }
            true
        })
        .map(|x| x.as_str())
        .collect();

    if no_test_modules.len() > 0 {
        Err(format!(
            "not tested modules detected, {}",
            no_test_modules.join(", ")
        ))
    } else {
        Ok(())
    }
}
