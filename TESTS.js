


// EMAIL SEARCH TOOL THAT RETURNS ROW/OBJECT
// pool.query('SELECT * FROM users', (err, result) => {
//     if (!err) {
//         let fields = result.rows;
//         let emailMatch = 'xray@gmail.com'
//         fields.map((item) => {
//             if (item.email == emailMatch) {
//                 console.log(item.user_id);
//                 console.log(item.email);
//                 console.log(item.password);
//             }
//         })
//     }
// });


// jwt.verify(token, "secretKey", (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });




// app.post("/login", async (req, res) => {

//     // Our login logic starts here
//     try {
//         // Get user input
//         const { email, password } = req.body;

//         // Validate user input
//         if (!(email && password)) {
//             res.status(400).send("All input is required");
//         }
//         // Validate if user exist in our database
//         const user = await User.findOne({ email });

//         if (user && (await bcrypt.compare(password, user.password))) {
//             // Create token
//             const token = jwt.sign(
//                 { user_id: user._id, email },
//                 process.env.TOKEN_KEY,
//                 {
//                     expiresIn: "2h",
//                 }
//             );

//             // save user token
//             user.token = token;

//             // user
//             res.status(200).json(user);
//         }
//         res.status(400).send("Invalid Credentials");
//     } catch (err) {
//         console.log(err);
//     }
//     // Our register logic ends here
// });



// const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, { expiresIn: "2h", });
// // save user token
// user.token = token;



// let user = { email: emailLogin };
// userSession.push(item.user_id, item.email, item.password);

// jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10' }, function (err, accessToken) {
//     // console.log('JWT Token: ' + accessToken);
//     userSession.push(accessToken);
//     logger(userSession);
// });
// res.redirect(`/users/${userSession[0]}`);

// Log in current users OG BEAST
// router.post('/users/login', (req, res) => {
//     let emailLogin = req.body.email.toLowerCase();
//     let passwordLogin = req.body.password;
//     pool.query('SELECT * FROM users', (err, result) => {
//         if (!err) {
//             let registeredUser = result.rows;
//             let userCheck = registeredUser.some(e => e.email === emailLogin)
//             if (userCheck) {
//                 // NEW DATA SET SO THE COMPARISON IS UNBAIS
//                 pool.query('SELECT * FROM users', (err, result) => {
//                     if (!err) {
//                         let fields = result.rows;
//                         fields.map((item) => {
//                             if (item.email == emailLogin) {
//                                 bcrypt.compare(passwordLogin, item.password, function (err, result, next) {
//                                     if (err) {
//                                         next(err);
//                                     }
//                                     if (result) {
//                                         console.log("Entered email is in user table.")
//                                         // JWT STUFF //
//                                         let user = { email: emailLogin };
//                                         let accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//                                         console.log('JWT Token: ' + accessToken);
//                                         console.log(item.email);
//                                         // (
//                                         //     'INSERT INTO users (access_token) VALUES ($3)', [accessToken]
//                                         // )
//                                         // pool.query(
//                                         //     `INSERT INTO users (access_token) VALUES ${accessToken}`
//                                         // )

//                                         // pool.query(
//                                         //     'SELECT * FROM users',
//                                         //     (err, result) => {
//                                         //         if (err) {
//                                         //             console.log('Yo what the fuck??');
//                                         //         }
//                                         //         if (result) {
//                                         //             console.log(result.rows);
//                                         //         }
//                                         //     })

//                                         // pool.query(
//                                         //     `UPDATE users SET (access_token) VALUES (${accessToken})`,
//                                         //     (err, result) => {
//                                         //         if (err) {
//                                         //             console.log('Yo what the fuck??');
//                                         //         }
//                                         //         if (result) {
//                                         //             console.log("updated token");
//                                         //         }
//                                         //     })

//                                         res.redirect(`/users/${item.user_id}`);
//                                     }
//                                 });
//                             }
//                         })
//                     }
//                 });
//             } else {
//                 res.render('signup');
//                 console.log("Email not registered. Please sign up.")
//             }
//         }
//     });
// });

// const verifyToken = (userIdLogin, req, res, next) => {
//     const accessToken =
//         req.body.accessToken || req.query.accessToken || req.headers["x-access-token"];
//     jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
//         console.log(decoded) // bar
//     });
//     console.log("Is this shit working???");
//     console.log("Inside verifyToken: " + userIdLogin);
//     // req.params.userId = userId;
//     return next();

// }

// if (verifyToken) {
//     console.log("true");
// } else {
//     console.log(false);
// }


// var selectFrom = function (data, table, condition, callback) {

//     pool.query(`SELECT ${data} FROM ${table} ${condition}`, function (err, result) {
//         if (err)
//             return callback(err);
//         callback(null, result.rows[0][data]);
//     })
//     pool.end();
// }

// selectFrom('amount', 'total_nonfarm_monthly_sa', `WHERE month='2019-08-31'`, function (err, result) {
//     console.log(err, result);
// });

// Just logs each route as they are requested
// function logger(req, res, next) {
//     console.log("logger: " + " Current url: " + req.originalUrl);
//     next();
// }
// router.use(logger);
// LOGGER


// router.get('/:postId/', (req, res) => {

//     // How to set [postId] to spool up the post that was clicked?
//     pool.query('SELECT * FROM posts WHERE post_id=$1', ['BDEA8A98'], (err, result) => {
//         if (result) {
//             res.render('post', {
//                 jobPosts: result.rows,
//             })
//         }
//     });
// });

// router.get('/user/:userId', (req, res) => {
//     let sessionIdCookies = req.cookies.session_id;
//     let linkToUserDash = `/user/userId${sessionIdCookies}`
//     let linkToLogout = `/user/userId${sessionIdCookies}/logout`
//     let linkToUserPosts = `/user/userId${sessionIdCookies}/posts`
//     let linkToUserAccount = `/user/userId${sessionIdCookies}/account`
//     res.render('userDashboard', {
//         mypepper: linkToUserDash,
//         logout: linkToLogout,
//         userPosts: linkToUserPosts,
//         userAccount: linkToUserAccount,
//     });
// });



<div>
    <div class="single-post-container">

        <h3 class="job-post-title">
            <%= jobPost.post_title %>
        </h3>

        <p class="job-post-content">
            <%= jobPost.post_content %>
        </p>
        <p class="job-post-id">Post ID:
            <%= jobPost.post_id %>
        </p>
        <h4 class="job-post-location">Location:
            <%= jobPost.city_country %>
        </h4>
        <h4 class="job-post-contact">Contact:
            <%= jobPost.hiring_contact %>
        </h4>

    </div>
</div>

