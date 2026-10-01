const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    "https://tssqtryjtajrlqxjpmyh.supabase.co",
    "sb_publishable_Zp3h22p0qfh1M15hr0l_mA_v9RHT_NQ"
);

async function testUser(email, password) {
    console.log(`\nTesting: ${email}`);

    const { error: loginError } =
        await supabase.auth.signInWithPassword({
            email,
            password
        });

    if (loginError) {
        console.log("Login failed:", loginError.message);
        return;
    }

    const { data, error } =
        await supabase
            .from("profiles")
            .select("*");

    if (error) {
        console.log("Query error:", error.message);
    } else {
        console.log("Rows returned:", data);
    }

    await supabase.auth.signOut();
}

async function main() {
    await testUser(
        "usera@test.com",
        "SaiKesh8345"
    );

    await testUser(
        "userb@test.com",
        "SaiKesh8345"
    );
}

main();