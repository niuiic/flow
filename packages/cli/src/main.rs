use std::{env, path::PathBuf};

mod coverage;
mod doc;
mod fs;
mod lint;

fn main() {
    let args: Vec<String> = env::args().collect();
    let args = &args[1..];

    let root = fs::get_root().unwrap();

    match args[0].as_str() {
        "cleanDoc" => {
            doc::clean_doc(
                PathBuf::from(root.clone())
                    .join("packages/doc/docs/api")
                    .to_str()
                    .unwrap(),
            );
        }
        "lint" => {
            let mut lint_error = false;

            let res = lint::check_test(
                PathBuf::from(root.clone())
                    .join("packages/core/src")
                    .to_str()
                    .unwrap(),
                PathBuf::from(root.clone())
                    .join("packages/test/src")
                    .to_str()
                    .unwrap(),
                args[1..]
                    .iter()
                    .map(|x| {
                        if let None = x.find(&root) {
                            PathBuf::from(root.clone())
                                .join(x)
                                .to_str()
                                .unwrap()
                                .to_string()
                        } else {
                            x.to_string()
                        }
                    })
                    .collect(),
            );
            if let Err(err) = res {
                eprintln!("{}", err);
                lint_error = true;
            }

            if lint_error {
                panic!()
            }
        }
        "fixCoverage" => {
            coverage::trans_to_absolute_path(
                "../core",
                PathBuf::from(root.clone())
                    .join("packages/core")
                    .to_str()
                    .unwrap(),
                PathBuf::from(root.clone())
                    .join("packages/test/coverage/lcov.info")
                    .to_str()
                    .unwrap(),
            )
            .unwrap();
        }
        _ => {}
    }
}
