use std::process::Command;

pub fn clean_doc(doc_dir: &str) {
    let command = r#"grep -rl "Generated using \[typedoc-plugin-markdown\].*" | xargs sed -zi "s/\*\*\*\n\nGenerated using \[typedoc-plugin-markdown\].*"//g"#;

    let mut process = Command::new("sh")
        .args(["-c", command])
        .current_dir(doc_dir)
        .spawn()
        .expect("failed to start clean doc");

    let status = process.wait().expect("failed to wait for cleaning");
    if status.success() {
        println!("succeed to clean doc");
    } else {
        println!("failed to clean doc");
    }
}
