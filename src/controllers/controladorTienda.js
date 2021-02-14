const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('registro');
    });
};

controller.test = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('index');
    });
};

controller.switches = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('switches');
    });
};

controller.keyboard = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('keyboard');
    });
};

controller.keycaps = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('keycap');
    });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, conn) => {
    const query = conn.query('INSERT INTO usuarios set ?', data, (err, rows) => {
      console.log(rows)
      res.redirect('/');
    })
  })
  req.getConnection((err, conn) => {
    const query = conn.query('INSERT INTO factura set ?', data, (err, rows) => {
      console.log(rows)
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, rows) => {
      res.render('usuarios_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newusuarios = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE usuarios set ? where id = ?', [newusuarios, id], (err, rows) => {
    res.redirect('/');
    });
  });
};

controller.delete1 = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM usuarios WHERE id = ?', [id], (err, rows) => {
      req.getConnection((err, conn) => {
        conn.query('DELETE FROM factura WHERE id = ?', [id], (err, rows) => {
          res.redirect('/admin');
        });
      });
    });
  });
}

controller.erase = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
      req.getConnection((err, conn) => {
        conn.query('DELETE FROM carro WHERE id = ?', [id], (err, rows) => {
          res.redirect('/cart');
        });
      });
  });
}

controller.check = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM factura", [id], (err, rows) => {
      res.render('check', {
        data: rows
      });
    });
  });
};

controller.ign = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM factura WHERE id = ?', [id], (err, rows) => {
      res.redirect('/check');
    });
  });
}

controller.renderF = (req, res) => {
  const client = req.body;
  console.log([client]);
  req.getConnection((err, conn) => {
      conn.query(`SELECT * FROM factura WHERE cliente = ?`,client.cliente, (err, rows) => {
        console.log(rows);
        if (err) res.json(err);
        res.render('renderF', {
          data: rows
        });
      });
    });
};
controller.calc = (req, res) => {
  const data = req.params;
  console.log(data);
}

controller.user = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('./registro');
    });
};

controller.login = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('login');
    });
};

controller.admin = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM usuarios', (err, rows) => {
     if (err) {
      res.json(err);
     }
     res.render('admin', {
        data: rows
     });
    });
  });
};

controller.cart = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM carro', (err, rows) => {
     if (err) {
      res.json(err);
     }
     res.render('checkout', {
        data: rows
     });
    });
  });
};


//-----Carro-----\\

//Switches\\
controller.switches1 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('EVA-01', '120')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches2 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('70s', '70')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches3 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('neo white', '130')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches4 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('jadeite', '90')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches5 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('kanji', '120')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches6 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('pink gold', '100')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches7 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('pastel', '60')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches8 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('neon', '85')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};
controller.switches9 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('minimalist', '50')", (err, rows) => {
      console.log(rows)
      res.render('switches');
    })
  })
};

//keyboard\\
controller.keyboard1 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('pink', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard2 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('black', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard3 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('blue cream', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard4 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('blue', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard5 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('cyan', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard6 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('cream', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard7 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('jade', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard8 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('orange white', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};
controller.keyboard9 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('orange', '20')", (err, rows) => {
      console.log(rows)
      res.render('keyboard');
    })
  })
};

//keycap\\
controller.keycap1 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('blue pink', 130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap2 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('boba fett', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap3 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('BRW', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap4 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('creamy', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap5 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('cyber', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap6 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('grey', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap7 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('imperial', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap8 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('smooth grey', '130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};
controller.keycap9 = (req, res) => {
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO carro (nombre, precio) VALUES ('white cyan', 130')", (err, rows) => {
      console.log(rows)
      res.render('keycap');
    })
  })
};

module.exports = controller;