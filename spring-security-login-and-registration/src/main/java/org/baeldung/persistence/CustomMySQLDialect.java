package org.baeldung.persistence;

import org.hibernate.dialect.PostgreSQL82Dialect;
public class CustomMySQLDialect extends PostgreSQL82Dialect {
    @Override
    public boolean dropConstraints() {
        return false;
    }
}
